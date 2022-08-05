export const fetchGetItems =async (api, type) => {
    const res = await fetch(api, {
        method: type, // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        // body: JSON.stringify(data),
    })
    const result = await res.json()
    return result
}