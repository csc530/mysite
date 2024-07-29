import deviconJson from "devicon/devicon.json";

export type Design = 'plain' | 'original' | 'line';
export function getDesigns(): Design[] {
    return ['plain', 'original', 'line'];
}

export type DeviconProps = {
    icon: string,
    size?: number,
    coloured?: boolean,
    wordmark?: boolean,
    design: Design,
    fallback?: boolean | 'no-text'
}

export function hasWordmark(iconClass: string) {
    const icon = deviconJson.find(i => i.name === iconClass)
    return icon ? icon.versions.font.some(font => /\w+-wordmark/.test(font)) : false
}