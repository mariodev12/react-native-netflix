import _ from 'lodash'

export const replaceHttps = url => {
    return _.replace(url, /^http:\/\//i, 'https://')
}

export const removeHtmlTags = text => {
    return _.replace(text, /<[^>]*>/g, "")
}

export const getYear = date => {
    const newDate = new Date(date)
    return newDate.getFullYear()
}