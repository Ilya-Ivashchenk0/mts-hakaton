export interface HeaderProps {
  dict: {
    total: number
    records: {
      recordId: string
      createdAt: Date
      updatedAt: Date
      fields: {
        Element: string
        Text: string
        Url: string
      }
    }[]
  }
}
