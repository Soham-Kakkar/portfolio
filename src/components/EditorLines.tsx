const syntaxColors = {
  keyword: 'text-purple-400',
  variable: 'text-blue-400',
  string: 'text-green-400',
  punctuation: 'text-gray-400',
  comment: 'text-gray-500 italic select-text',
  lineNumber: 'text-gray-600',
};

export default function SyntaxLine({ line, lineNumber }: { line: string; lineNumber: number }) {
  const isComment = line.trim().startsWith('//') || line.trim().startsWith('$ ');

  const tokens = line.split(/(\s+|[{}();,])/g).filter(Boolean);

  return (
    <div className="flex w-full">
      <div className={`pr-4 text-right w-10 shrink-0 ${syntaxColors.lineNumber}`}>
        {lineNumber}
      </div>
      <div className="flex-grow whitespace-pre-wrap break-words">
        {tokens.map((token, i) => {
          if (isComment) return <span key={i} className={syntaxColors.comment}>{token}</span>;
          if (/^(const|let|var|function|return|if|else|for|while|switch|case|break)$/.test(token))
            return <span key={i} className={syntaxColors.keyword}>{token}</span>;
          if (/^".*"$/.test(token) || /^".*$/.test(token) || /^.*"$/.test(token))
            return <span key={i} className={syntaxColors.string}>{token}</span>;
          if (/^\$[A-Z_]+/.test(token))
            return <span key={i} className={syntaxColors.variable}>{token}</span>;
          if (/^[{}();,]$/.test(token))
            return <span key={i} className={syntaxColors.punctuation}>{token}</span>;
          return <span key={i}>{token}</span>;
        })}
      </div>
    </div>
  );
}