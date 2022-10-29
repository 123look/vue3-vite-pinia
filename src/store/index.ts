import { defineStore } from 'pinia'
import { Names } from './store-namespace'
import { getArticleClass } from '@/http/index'
type Article = {
    id: number,
    cate_alias: string,
    cate_name: string
}
export const userInfoStore = defineStore(Names.Test, {
    
    state:() => {
        return {
            article:<Article[]>[
                {
                    id: 1,
                    cate_name: 'zs',
                    cate_alias: 'zss'
                }
            ],
            state: false,
            title: '',
            dialogVisible: false,
            updateArticle:<Article> {
                id: 0,
                cate_name: '',
                cate_alias: ''
            }
            
        }
    },
    getters: {

    },
    actions: {
       async getArticle(article: Article){
            const {data} = await getArticleClass()
            article = data.data
        },
        isDialogVisible() {
            this.dialogVisible != this.dialogVisible
        }
    }
})