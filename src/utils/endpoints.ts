const baseHeaders = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${process.env.MTS_TABS_TOKEN}`
}

export const endpoints = {
  cms: {
    pages: {
      home: () => ({
        url: `${process.env.MTS_TABS_BASE_URL}/`,
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
        url: `${process.env.MTS_TABS_BASE_URL}/datasheets/dsteU5ly9vNud1k6Di/records?viewId=viwQxQiFmhPzH&fieldKey=name`,
        options: {
          method: 'GET',
          headers: baseHeaders
        }
      })
    }
  }
}
