//  Just testing
export default {
    data: () => ({
        favorites: []
    }),
    methods: {

        generateFavoriteUser() {
            const sort = (Math.random() * (100 - 0) + 0).toFixed(0);
            const genderAvatar = ['men', 'women'][(Math.random() * (1 - 0) + 0).toFixed(0)];
            this.favorites.push({
                id: this.favorites.length + 1,
                name: "Lorem Ipsum",
                avatarPath: `https://randomuser.me/api/portraits/${genderAvatar}/${sort}.jpg`
            })
        },

        deleteFavoriteUser(e) {
            let index = this.favorites.indexOf(e);
            this.favorites.splice(index, 1)
        }
    },

}

const IMG_BASE_URL = 'https://randomwordgenerator.com/img/picture-generator/'
export const posts =[
    {
        title:'Lorem ipsum',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        imgPath:`${IMG_BASE_URL}/54e1dc464a56ab14f1dc8460962e33791c3ad6e04e507441722973d49045cd_640.jpg`,
        likes:30,
        comments:[
            {   
                name:'Lorem Ipsum',
                user_name:'sienna',
                content:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece'
            },
            {   
                name:'Lorem Ipsum',
                user_name:'ana',
                content:'The cites of the word in classical literature, discovered the undoubtable '
            },
            {   
                name:'Lorem Ipsum',
                user_name:'bulah',
                content:'middle of text. All the Lorem Ipsum generators on the Internet tend to'
            }
        ]
    },
    {
        title:'Lorem ipsum',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        imgPath:`${IMG_BASE_URL}/53e5d7474354ad14f1dc8460962e33791c3ad6e04e5074407c2e7bd09f49c4_640.jpg`,
        likes:10,
        comments:[
            {   
                name:'Contrary to popular',
                user_name:'miss',
                content:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece'
            },
            {   
                name:'Lorem Ipsum',
                user_name:'sadye',
                content:'The cites of the word in classical literature, discovered the undoubtable '
            },
            {   
                name:'Lorem Ipsum',
                user_name:'Bulah',
                content:'middle of text. All the Lorem Ipsum generators on the Internet tend to'
            }
        ]
    },
]