/**
 * MEOK AI LABS — Research Export Utilities
 *
 * Generate PDF and Word exports of research reports.
 */

import { type ResearchTemplate } from './research-templates';

export interface ExportOptions {
  format: 'pdf' | 'word' | 'markdown' | 'html' | 'text';
  includeSources: boolean;
  includeMetadata: boolean;
  template?: ResearchTemplate;
}

export interface ResearchExport {
  title: string;
  query: string;
  answer: string;
  sources: Array<{ title: string; url: string; snippet?: string }>;
  metadata?: {
    template?: string;
    generatedAt: string;
    model?: string;
    confidence?: number;
  };
}

/**
 * Generate markdown content from research
 */
export function generateMarkdown(data: ResearchExport, options: ExportOptions): string {
  const lines: string[] = [];
  
  // Title
  lines.push(`# ${data.title || 'Research Report'}`);
  lines.push('');
  
  // Metadata
  if (options.includeMetadata && data.metadata) {
    lines.push(`*Generated: ${data.metadata.generatedAt}*`);
    if (data.metadata.template) {
      lines.push(`*Template: ${data.metadata.template}*`);
    }
    if (data.metadata.model) {
      lines.push(`*Model: ${data.metadata.model}*`);
    }
    lines.push('');
    lines.push('---');
    lines.push('');
  }
  
  // Query
  lines.push(`## Research Query`);
  lines.push('');
  lines.push(data.query);
  lines.push('');
  
  // Answer
  lines.push('## Findings');
  lines.push('');
  lines.push(data.answer);
  lines.push('');
  
  // Sources
  if (options.includeSources) {
    lines.push('## Sources');
    lines.push('');
    if (data.sources.length > 0) {
      data.sources.forEach((source, i) => {
        lines.push(`${i + 1}. [${source.title}](${source.url})`);
        if (source.snippet) {
          lines.push(`   > ${source.snippet.slice(0, 150)}...`);
        }
        lines.push('');
      });
    } else {
      lines.push('No sources found');
      lines.push('');
    }
  }
  
  return lines.join('\n');
}

/**
 * Generate HTML for PDF conversion
 */
export function generateHTML(data: ResearchExport, options: ExportOptions): string {
  const sourcesList = options.includeSources 
    ? data.sources.map((s, i) => `<li><a href="${s.url}">${s.title}</a></li>`).join('')
    : '';

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${data.title || 'Research Report'}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 800px; margin: 0 auto; padding: 40px; line-height: 1.6; color: #333; }
    h1 { color: #1a1a2e; border-bottom: 2px solid #c9a84c; padding-bottom: 10px; }
    h2 { color: #2d2d44; margin-top: 30px; }
    .metadata { color: #666; font-size: 14px; margin-bottom: 20px; }
    .query { background: #f5f5f5; padding: 15px; border-left: 4px solid #c9a84c; margin: 20px 0; }
    .sources { background: #fafafa; padding: 15px; margin-top: 30px; }
    .sources ul { padding-left: 20px; }
    .sources li { margin: 8px 0; }
    a { color: #c9a84c; }
    @media print { body { padding: 20px; } }
  </style>
</head>
<body>
  <h1>${data.title || 'Research Report'}</h1>
  
  ${options.includeMetadata && data.metadata ? `
    <div class="metadata">
      <p>Generated: ${data.metadata.generatedAt}</p>
      ${data.metadata.template ? `<p>Template: ${data.metadata.template}</p>` : ''}
      ${data.metadata.model ? `<p>Model: ${data.metadata.model}</p>` : ''}
    </div>
  ` : ''}
  
  <h2>Research Query</h2>
  <div class="query">${data.query}</div>
  
  <h2>Findings</h2>
  <div class="answer">${data.answer.replace(/\n/g, '<br>')}</div>
  
  ${options.includeSources && data.sources.length > 0 ? `
    <div class="sources">
      <h3>Sources</h3>
      <ul>${sourcesList}</ul>
    </div>
  ` : ''}
</body>
</html>
  `.trim();
}

/**
 * Convert HTML to PDF using browser print
 * (This is a client-side solution - in production, use a server-side PDF generator)
 */
export function printToPDF() {
  window.print();
}

/**
 * Download as file (markdown or HTML)
 */
export function downloadFile(content: string, filename: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Export research as markdown
 */
export function exportAsMarkdown(data: ResearchExport, options: ExportOptions) {
  const markdown = generateMarkdown(data, options);
  const filename = `research-${Date.now()}.md`;
  downloadFile(markdown, filename, 'text/markdown');
}

/**
 * Export research as HTML (can be printed to PDF)
 */
export function exportAsHTML(data: ResearchExport, options: ExportOptions) {
  const html = generateHTML(data, options);
  const filename = `research-${Date.now()}.html`;
  downloadFile(html, filename, 'text/html');
}

/**
 * Export research as plain text
 */
export function exportAsText(data: ResearchExport, options: ExportOptions) {
  const markdown = generateMarkdown(data, options);
  const text = markdown
    .replace(/#{1,6}\s/g, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  const filename = `research-${Date.now()}.txt`;
  downloadFile(text, filename, 'text/plain');
}