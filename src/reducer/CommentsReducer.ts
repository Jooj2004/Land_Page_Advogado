import { comment } from "@/types/typeComment"

type AddAction = {
    type: 'add',
    payload: {
        nome: string,
        text: string
    }
}

type EditCommentAction = {
    type: 'edit',
    payload: {
        Newtext: string,
        id: number
    }
}

type RemoveCommentAction = {
    type: 'remove'
    payload: {
        id: number
    }
}

type ListActions = AddAction | EditCommentAction | RemoveCommentAction

export const CommentsReducer = (comments: comment[], action:ListActions) => {
    switch(action.type){
        case 'add':
            return [...comments, {
                id: comments.length, text: action.payload.text, nome: action.payload.nome
            }]
        case 'edit':
            return comments.map((e) => {
                if(e.id === action.payload.id){
                    e.text = action.payload.Newtext
                }
                return e
            })
        case 'remove':
            return comments.filter((e) => action.payload.id !== e.id)
        default:
            return comments
    }
} 