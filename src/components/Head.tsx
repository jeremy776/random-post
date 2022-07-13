import HeadNext from 'next/head';

interface HeadProps {
    title?: string;
}

export default function Head({title}: HeadProps) {
    return (
        <HeadNext>
            <title>{title || 'RandPost'}</title>
        </HeadNext>
    )
}