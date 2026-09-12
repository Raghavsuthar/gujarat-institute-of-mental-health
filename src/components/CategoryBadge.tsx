import React from 'react';
import { ConditionCategory, Language } from '../types';
import { getCategoryTheme } from '../data/categoryThemes';

interface CategoryBadgeProps {
  category: ConditionCategory | string;
  currentLang?: Language;
  size?: 'xs' | 'sm' | 'md';
  showDot?: boolean;
  className?: string;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({
  category,
  currentLang = 'en',
  size = 'sm',
  showDot = true,
  className = '',
}) => {
  const theme = getCategoryTheme(category);
  const label = theme.name[currentLang] || category;

  const sizeClasses = {
    xs: 'text-[11px] px-2 py-0.5 gap-1.5',
    sm: 'text-xs px-2.5 py-1 gap-1.5',
    md: 'text-xs sm:text-sm px-3 py-1.5 gap-2',
  }[size];

  return (
    <span
      className={`inline-flex items-center font-medium rounded-md whitespace-nowrap transition-colors select-none ${sizeClasses} ${className}`}
      style={{
        backgroundColor: theme.hex.bg,
        borderColor: theme.hex.border,
        borderWidth: '1px',
        borderStyle: 'solid',
        color: theme.hex.text,
      }}
    >
      {showDot && (
        <span
          className="w-1.5 h-1.5 rounded-full shrink-0"
          style={{ backgroundColor: theme.hex.dot }}
          aria-hidden="true"
        />
      )}
      <span>{label}</span>
    </span>
  );
};
