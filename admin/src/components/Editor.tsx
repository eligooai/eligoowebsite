import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import { useEffect, useRef, useState } from 'react'
import {
  Bold, Italic, Underline as UnderlineIcon, Strikethrough, Heading2, Heading3, List, ListOrdered,
  Quote, Code2, Minus, Image as ImageIcon, Link2, AlignLeft, AlignCenter, AlignRight, Undo2, Redo2, FileCode2,
} from 'lucide-react'
import { api } from '../api'

export default function Editor({ value, onChange }: { value: string; onChange: (html: string) => void }) {
  const [srcMode, setSrcMode] = useState(false)
  const [src, setSrc] = useState(value)
  const fileRef = useRef<HTMLInputElement>(null)
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image.configure({ inline: false }),
      Link.configure({ openOnClick: false, autolink: true }),
      Placeholder.configure({ placeholder: 'Write your story…' }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  })
  useEffect(() => {
    if (editor && value !== editor.getHTML()) editor.commands.setContent(value, false)
    setSrc(value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!editor, value === '' ? '' : 'x'])

  if (!editor) return null
  const B = ({ on, act, children, title }: any) => (
    <button type="button" title={title} className={`tt-btn ${on ? 'on' : ''}`} onMouseDown={e => { e.preventDefault(); act() }}>{children}</button>
  )
  const addImage = async (f: File) => {
    const fd = new FormData(); fd.append('file', f)
    const r = await api<{ url: string }>('/eapi/admin/upload', { method: 'POST', body: fd })
    editor.chain().focus().setImage({ src: r.url }).run()
  }
  const setLink = () => {
    const prev = editor.getAttributes('link').href
    const url = window.prompt('Link URL', prev || 'https://')
    if (url === null) return
    if (!url) editor.chain().focus().unsetLink().run()
    else editor.chain().focus().setLink({ href: url }).run()
  }
  return (
    <div className="card overflow-hidden">
      <div className="flex flex-wrap items-center gap-0.5 px-3 py-2" style={{ borderBottom: '1px solid #E1E8E5', background: '#FAFBFA' }}>
        <B title="Bold" on={editor.isActive('bold')} act={() => editor.chain().focus().toggleBold().run()}><Bold size={15} /></B>
        <B title="Italic" on={editor.isActive('italic')} act={() => editor.chain().focus().toggleItalic().run()}><Italic size={15} /></B>
        <B title="Underline" on={editor.isActive('underline')} act={() => editor.chain().focus().toggleUnderline().run()}><UnderlineIcon size={15} /></B>
        <B title="Strike" on={editor.isActive('strike')} act={() => editor.chain().focus().toggleStrike().run()}><Strikethrough size={15} /></B>
        <span className="w-px h-5 mx-1.5" style={{ background: '#E1E8E5' }} />
        <B title="Heading 2" on={editor.isActive('heading', { level: 2 })} act={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}><Heading2 size={15} /></B>
        <B title="Heading 3" on={editor.isActive('heading', { level: 3 })} act={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}><Heading3 size={15} /></B>
        <B title="Bullet list" on={editor.isActive('bulletList')} act={() => editor.chain().focus().toggleBulletList().run()}><List size={15} /></B>
        <B title="Numbered list" on={editor.isActive('orderedList')} act={() => editor.chain().focus().toggleOrderedList().run()}><ListOrdered size={15} /></B>
        <B title="Quote" on={editor.isActive('blockquote')} act={() => editor.chain().focus().toggleBlockquote().run()}><Quote size={15} /></B>
        <B title="Code block" on={editor.isActive('codeBlock')} act={() => editor.chain().focus().toggleCodeBlock().run()}><Code2 size={15} /></B>
        <B title="Divider" act={() => editor.chain().focus().setHorizontalRule().run()}><Minus size={15} /></B>
        <span className="w-px h-5 mx-1.5" style={{ background: '#E1E8E5' }} />
        <B title="Align left" on={editor.isActive({ textAlign: 'left' })} act={() => editor.chain().focus().setTextAlign('left').run()}><AlignLeft size={15} /></B>
        <B title="Align center" on={editor.isActive({ textAlign: 'center' })} act={() => editor.chain().focus().setTextAlign('center').run()}><AlignCenter size={15} /></B>
        <B title="Align right" on={editor.isActive({ textAlign: 'right' })} act={() => editor.chain().focus().setTextAlign('right').run()}><AlignRight size={15} /></B>
        <span className="w-px h-5 mx-1.5" style={{ background: '#E1E8E5' }} />
        <B title="Insert image" act={() => fileRef.current?.click()}><ImageIcon size={15} /></B>
        <B title="Link" on={editor.isActive('link')} act={setLink}><Link2 size={15} /></B>
        <span className="w-px h-5 mx-1.5" style={{ background: '#E1E8E5' }} />
        <B title="Undo" act={() => editor.chain().focus().undo().run()}><Undo2 size={15} /></B>
        <B title="Redo" act={() => editor.chain().focus().redo().run()}><Redo2 size={15} /></B>
        <span className="flex-1" />
        <B title="HTML source" on={srcMode} act={() => {
          if (srcMode) { editor.commands.setContent(src, false); onChange(src) } else setSrc(editor.getHTML())
          setSrcMode(!srcMode)
        }}><FileCode2 size={15} /></B>
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) addImage(f); e.currentTarget.value = '' }} />
      </div>
      {srcMode
        ? <textarea className="w-full p-5 font-mono text-xs outline-none" style={{ minHeight: 420, border: 'none', resize: 'vertical' }} value={src} onChange={e => { setSrc(e.target.value); onChange(e.target.value) }} />
        : <EditorContent editor={editor} />}
    </div>
  )
}
