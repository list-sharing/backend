const lists = require('../db/knex')
const uuid = require('uuid')

function createItem(userId, listId, newItem) {

    const user = lists.find(ele => ele.id === userId)

    const list = user.find(ele => ele.id === listId)

    if (!list) {
        return {
            error: ['list not found']
        }
    }

    if (!user) {
        return {
            error: ['user not found']
        }
    }

    const error = []
    const {
        listId,
        sourceURL,
        itemSynopsis
    } = newItem

    newItem.id=uuid()

    if (!sourceURL && !itemSynopsis && !listId) {
        error.push('Please Provide list Info To Create')
    }
    if (error.length) return {
        error
    }
    list.items.push(newItem)
    return newItem
}

function modifyItem(userId, listId, itemId, newItem) {
    const user = lists.find(ele => ele.id === userId)
    const list = lists.find(ele => ele.id === listId)
    const item = list.items

    if (!list) {
        return {
            error: ['list not found']
        }
    }

    if (!user) {
        return {
            error: ['user not found']
        }
    }

    const itemIndex = item.findIndex(ele => ele.id === itemId)
    const listIndex = lists.findIndex(ele => ele.id === listId)
    if (listIndex === -1) {
        error.push('Not Found')
    }

    const {
        id,
        listId,
        sourceURL,
        itemSynopsis
    } = newItem

    const error = []
    if (!sourceURL && !itemSynopsis && !listId) {
        error.push("Please fill in all values")
    }
    if (error.length) return {
        error
    }

    lists[listIndex].items = item
    item[itemIndex].sourceURL = sourceURL
    item[itemIndex].itemSynopsis = itemSynopsis
    return item[itemIndex]
}

function getAllItems(userId, listId) {
    const user = lists.find(ele => ele.id === userId)
    const list = lists.find(ele => ele.id === listId)

    if (!list) {
        return {
            error: ['list not found']
        }
    }
    if (!user) {
        return {
            error: ['user not found']
        }
    }

    const item = list.items
    const auths = item.map((ele)=> {
        return ele
    })
    return auths
}

function getOneItem(userId, listId, itemId) {
    const user = lists.find(ele => ele.id === userId)

    const list = lists.find(ele => ele.id === listId)
    const item = list.items

    const itemIndex = item.findIndex(ele => ele.id === itemId)

    if (!user) {
        return {
            error: ['user not found']
        }
    }
    if (!list) {
        return {
            error: ['list not found']
        }
    }
    if (!item) {
        return {
            error: ['item not found']
        }
    }
    return item[itemIndex]
}

function removeItem(userId, listId, itemId) {
    const user = lists.find(ele => ele.id === userId)
    const listIndex = lists.findIndex(ele => ele.id === listId)
    const item = lists[listIndex].items
    const itemIndex = item.findIndex(ele => ele.id === itemId)
    
    if (!user) {
        return {
            error: ['user not found']
        }
    }
    if (!list) {
        return {
            error: ['list not found']
        }
    }
    if (!item) {
        return {
            error: ['item not found']
        }
    }
    if (listIndex === -1) return {
        error: ['list not Found']
    }
    if (itemIndex === -1) {
        return {
            error: ['item not found']
        }
    }

    item.splice(itemIndex, 1)

    return item
}

module.exports ={createItem, modifyItem, getOneItem, getAllItems, removeItem}