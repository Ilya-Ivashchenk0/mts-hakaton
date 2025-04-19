export interface HeaderProps {
  dict: {
    total: number
    records: {
      recordId: string
      createdAt: Date
      updatedAt: Date
      fields: {
        element: string
        text: string
        url: string
      }
    }[]
  }
}
