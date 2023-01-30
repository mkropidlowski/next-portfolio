export interface SectionProps {
    id?: string;
    heading?: string;
    columnContent?: ColumnDataProps;
    className?: string;
    visualContent?: string;
}

export interface ColumnDataProps {
    columnHeading?: string;
    description?: string;
    buttonPrimary?: string;
    buttonSecondary?: string;
}
