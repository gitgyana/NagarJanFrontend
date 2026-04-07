export type LABEL_CARD_TYPE_STRING
    = 'data'
    | 'ai'
    | 'classification'
    | 'pending';

export type LabelCardInterface = {
    label: string;
    value: string;
    type: LABEL_CARD_TYPE_STRING;
};
