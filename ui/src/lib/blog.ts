import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  keywords: string[]
  readTime: number
  priority: 'high' | 'medium' | 'low'
  content: string
  excerpt: string
}

const CONTENT_DIR = path.join(process.cwd(), 'content/blog')

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
  return files
    .map(file => getPostBySlug(file.replace(/\.(mdx|md)$/, '')))
    .filter(Boolean)
    .sort((a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime()) as BlogPost[]
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  const mdPath = path.join(CONTENT_DIR, `${slug}.md`)
  const fullPath = fs.existsSync(filePath) ? filePath : mdPath
  if (!fs.existsSync(fullPath)) return null

  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)
  const words = content.split(/\s+/).length
  const readTime = Math.ceil(words / 200)
  const excerpt = content.replace(/[#*`]/g, '').split('\n').filter(Boolean).slice(0, 3).join(' ').slice(0, 280)

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || new Date().toISOString().split('T')[0],
    author: data.author || 'Nicholas Templeman',
    category: data.category || 'Insights',
    keywords: data.keywords || [],
    readTime,
    priority: data.priority || 'medium',
    content,
    excerpt,
  }
}
