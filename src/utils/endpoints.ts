const baseHeaders = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_MTS_TABS_TOKEN}`
}

export const endpoints = {
  cms: {
    pages: {
      home: () => ({
        url: `${process.env.MTS_TABS_BASE_URL}/fusion/v1/datasheets/dstkjeGa6o5leXtX0V/records?viewId=viw1WrNqtj0eD&fieldKey=name`,
        options: {
          method: 'GET',
          headers: baseHeaders
        }
      }),
      rooms: () => ({
        url: `${process.env.MTS_TABS_BASE_URL}/`,
        options: {
          method: 'GET',
          headers: baseHeaders
        }
      })
    },
    widgets: {
      header: () => ({
        url: `${process.env.MTS_TABS_BASE_URL}/fusion/v1/datasheets/dsteU5ly9vNud1k6Di/records?viewId=viwQxQiFmhPzH&fieldKey=name`,
        options: {
          method: 'GET',
          headers: baseHeaders
        }
      })
    },
    getImage: (url: string) => ({
      url: url,
      options: {
        method: 'GET',
        headers: baseHeaders
      }
    })
  }
}
