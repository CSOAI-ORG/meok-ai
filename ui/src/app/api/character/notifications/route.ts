/**
 * MEOK AI LABS — Character Notifications API
 * 
 * In-app notifications for character events
 * 
 * GET /api/character/notifications - Get notifications
 * POST /api/character/notifications - Mark as read
 * DELETE /api/character/notifications - Clear notifications
 */

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv-cache';

export const runtime = 'nodejs';

export interface Notification {
  id: string;
  characterId: string;
  userId: string;
  type: 'message' | 'badge' | 'evolution' | 'memory' | 'schedule' | 'reminder' | 'achievement' | 'milestone';
  title: string;
  body: string;
  icon?: string;
  read: boolean;
  actionUrl?: string;
  createdAt: string;
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const characterId = searchParams.get('characterId');
  const userId = searchParams.get('userId') || 'default';
  const unreadOnly = searchParams.get('unread') === 'true';
  const limit = Math.min(parseInt(searchParams.get('limit') ?? '20', 10), 50);
  
  try {
    const key = `meok:notifications:${userId}`;
    let notifications = (await kv.get<Notification[]>(key)) || [];
    
    if (characterId) {
      notifications = notifications.filter(n => n.characterId === characterId);
    }
    
    if (unreadOnly) {
      notifications = notifications.filter(n => !n.read);
    }
    
    const sorted = notifications
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, limit);
    
    const unreadCount = notifications.filter(n => !n.read).length;
    
    return NextResponse.json({
      notifications: sorted,
      unreadCount,
      total: notifications.length,
    });
  } catch (error) {
    console.error('[character/notifications] error:', error);
    return NextResponse.json({ error: 'Failed to fetch notifications' }, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { characterId, userId = 'default', type, title, body: notificationBody, action, notificationId } = body;
    
    const key = `meok:notifications:${userId}`;
    let notifications = (await kv.get<Notification[]>(key)) || [];
    
    if (action === 'mark_read' && notificationId) {
      const notification = notifications.find(n => n.id === notificationId);
      if (notification) {
        notification.read = true;
        await kv.set(key, notifications);
      }
      return NextResponse.json({ success: true });
    }
    
    if (action === 'mark_all_read') {
      notifications.forEach(n => n.read = true);
      await kv.set(key, notifications);
      return NextResponse.json({ success: true });
    }
    
    if (!characterId || !type || !title) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    const notification: Notification = {
      id: `notif_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      characterId,
      userId,
      type,
      title,
      body: notificationBody || '',
      read: false,
      actionUrl: body.actionUrl,
      createdAt: new Date().toISOString(),
    };
    
    notifications.push(notification);
    notifications = notifications.slice(-100);
    
    await kv.set(key, notifications);
    
    return NextResponse.json({
      success: true,
      notificationId: notification.id,
    });
  } catch (error) {
    console.error('[character/notifications] POST error:', error);
    return NextResponse.json({ error: 'Failed to create notification' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId') || 'default';
    const notificationId = searchParams.get('notificationId');
    const clearAll = searchParams.get('clear') === 'all';
    const clearRead = searchParams.get('clearRead') === 'true';
    
    const key = `meok:notifications:${userId}`;
    let notifications = (await kv.get<Notification[]>(key)) || [];
    
    if (clearAll) {
      notifications = [];
    } else if (notificationId) {
      notifications = notifications.filter(n => n.id !== notificationId);
    } else if (clearRead) {
      notifications = notifications.filter(n => !n.read);
    } else {
      return NextResponse.json({ error: 'Specify notificationId or clear=all/read' }, { status: 400 });
    }
    
    await kv.set(key, notifications);
    
    return NextResponse.json({ success: true, message: 'Notifications cleared' });
  } catch (error) {
    console.error('[character/notifications] DELETE error:', error);
    return NextResponse.json({ error: 'Failed to clear notifications' }, { status: 500 });
  }
}

export async function createNotification(
  userId: string,
  characterId: string,
  type: Notification['type'],
  title: string,
  body: string,
  actionUrl?: string
): Promise<void> {
  const key = `meok:notifications:${userId}`;
  const notifications = (await kv.get<Notification[]>(key)) || [];
  
  const notification: Notification = {
    id: `notif_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    characterId,
    userId,
    type,
    title,
    body,
    read: false,
    actionUrl,
    createdAt: new Date().toISOString(),
  };
  
  notifications.push(notification);
  await kv.set(key, notifications.slice(-100));
}