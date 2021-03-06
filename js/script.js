Vue.use(EmojiPicker)
const app = new Vue({
    el: '#app',
    data: {
        input: '',
        search: '',
        header1: true,
        header2: false,
        dropChatMenu: false,
        micIcon: true,
        sendIcon: false,
        newChatMenu: false,
        newChatName: '',
        newChatText: '',
        themeChange: true,
        theme: 'light',
        messageId: 0,
        dropdown: false,
        newtext: '',
        activeChat: 0,
        userSearch: '',
        newText: {
            text: '',
            data: '',
            status: '',
            menu: false
        },
        arrContact: [
            {
                name: 'Voldemort',
                lastAccess: 'ultimo accesso alle 13:44',
                img: 'img/voldemort.jpg',
                chat: [
                    {
                        text: 'Looking for you',
                        data: '12:34',
                        status: 'recived',
                        menu: false
                    },
                    {
                        text: 'I am not Harry!',
                        data: '12:34',
                        status: 'sent',
                        menu: false
                    },
                    {
                        text: 'Ops! Wrong chat!',
                        data: '12:34',
                        status: 'recived',
                        menu: false
                    },
                    {
                        text: 'Click destro per il menu!',
                        data: '12:34',
                        status: 'recived',
                        menu: false
                    },
                ],
                visibility: true
            }, 
            {
                name: 'Cetto la qualunque',
                lastAccess: 'ultimo accesso alle 13:34',
                img: 'img/cetto.jpg',
                chat: [
                    {
                        text: 'Secondo me non dobbiamo inquinare',
                        data: '12:34',
                        status: 'sent',
                        menu: false
                    },
                    {
                        text: 'Hai ragione Mirko. Per?? come criterio di massima, come sistema di riferimento, come atteggiamento preferenziale: tu fatti i fatti toi.',
                        data: '12:34',
                        status: 'recived',
                        menu: false
                    },
                    
                ],
                visibility: true
            },
            {
                name: 'Dart Vather',
                lastAccess: 'ultimo accesso alle 13:54',
                img: 'img/darth.webp',
                chat: [
                    {
                        text: 'Hey! I am your father',
                        data: '12:34',
                        status: 'recived',
                        menu: false
                    },
                    {
                        text: 'No way!',
                        data: '12:35',
                        status: 'sent',
                        menu: false
                    },
                    {
                        text: 'Seriusly!!!',
                        data: '12:36',
                        status: 'recived',
                        menu: false
                    },
                ],
                visibility: true
            },
            {
                name: 'Buffy the Slayer',
                lastAccess: 'ultimo accesso alle 13:34',
                img: 'img/buffy.jpg',
                chat: [
                    {
                        text: 'I love you!',
                        data: '12:34',
                        status: 'sent',
                        menu: false
                    },
                    {
                        text: 'Are you a vampire?',
                        data: '12:35',
                        status: 'recived',
                        menu: false
                    },
                    {
                        text: 'No!',
                        data: '12:36',
                        status: 'sent',
                        menu: false
                    },
                    {
                        text: 'Then you are not my type!',
                        data: '12:36',
                        status: 'recived',
                        menu: false
                    },
                ],
                visibility: true
            },
            {
                name: 'BestFriend',
                lastAccess: 'ultimo accesso alle 13:34',
                img: 'img/fibra.jpg',
                chat: [
                    {
                        text: 'Are u available?',
                        data: '12:34',
                        status: 'sent',
                        menu: false
                    },
                    {
                        text: 'See you in 15 min',
                        data: '12:34',
                        status: 'recived',
                        menu: false
                    },
                    {
                        text: 'Awesome!',
                        data: '12:34',
                        status: 'sent',
                        menu: false
                    }
                ],
                visibility: true
            },
        ],
        arrRandomText: [
            'Mi che sono bello',
            'Dici sul serio?',
            'Okay',
            'Sei una brutta persona',
            'No dai scherzavo',
            'Sul serio?',
            'Sai cosa ti dico?',
            'Si turbo, molto veloce! Gran bello animalo'
        ],
    },
    methods: {
        selectChat: function (index) {
            this.activeChat = index
            this.header1 = false
            this.header2 = true
        },
        online(index) {
            this.arrContact[index].lastAccess = 'Online'
            if(this.newText.text != '') {
            this.sendIcon = true
            this.micIcon = false}
        },
        addText: function (index){
            if(this.newText.text != '')
            {this.newText.text = this.newText.text.trim()
            const d = new Date();
            this.newText.data = d.getHours() + ':' + (d.getMinutes()<10?'0':'') + d.getMinutes()
            this.newText.status = 'sent'
            this.arrContact[index].chat.push({...this.newText})
            this.newText.text = ''
            this.sendIcon = false
            this.micIcon = true
            }
        },
        answer(index){
            if(this.newText.text != '')
            {
            this.arrContact[index].lastAccess = 'Sta scrivendo...'
            setTimeout(() => {
            let randomIndex = Math.floor(Math.random() * this.arrRandomText.length)
            this.newText.text = this.arrRandomText[randomIndex]
            const d = new Date();
            this.newText.data = d.getHours() + ':' + (d.getMinutes()<10?'0':'') + d.getMinutes()
            this.newText.status = 'recived'
            this.arrContact[index].chat.push({...this.newText})
            this.newText.text = ''
            this.arrContact[index].lastAccess = 'ultimo accesso alle ' + this.newText.data
            }, 3000)
            
        }},
        searchUser() {
            this.arrContact.forEach((element) => {
                if (element.name.toLowerCase().includes(this.userSearch.toLowerCase())) {
                    element.visibility = true;
                } else {
                    element.visibility = false;
                }
            });
        },
        menu(index, i) {
            this.arrContact[index].chat[i].menu = !this.arrContact[index].chat[i].menu
        },
        deleteText(index, i) {
            this.arrContact[index].chat.splice(i, 1);
        },
        themeChanging(){
            console.log('ciao')
            this.themeChange = !this.themeChange 
        },
        changeTheme(){
            if(this.themeChange){
            this.theme = 'light';
            } else {
            console.log('dsdd')
            this.theme = 'dark';
            }
         },
         toggleNewChatMenu(){
            this.newChatMenu = !this.newChatMenu
         },
        newChat(){
            this.newChatMenu = !this.newChatMenu
            const d = new Date();
            let date = d.getHours() + ':' + (d.getMinutes()<10?'0':'') + d.getMinutes()
           if(this.newChatName != '' && this.newChatText != '') {
            this.arrContact.unshift({name: this.newChatName, lastAccess: date, img: 'img/avatar_2.jpg', chat: [{text: this.newChatText, data: date, status: 'sent', menu: false}], visibility: true})
            this.newChatName = ''
            this.newChatText = ''
            setTimeout(() => {
                let randomIndex = Math.floor(Math.random() * this.arrRandomText.length)
                this.newText.text = this.arrRandomText[randomIndex]
                const d = new Date();
                this.newText.data = d.getHours() + ':' + (d.getMinutes()<10?'0':'') + d.getMinutes()
                this.newText.status = 'recived'
                this.arrContact[0].chat.push({...this.newText})
                this.newText.text = ''
                this.arrContact[0].lastAccess = 'ultimo accesso alle ' + this.newText.data
                }, 3000)

           } 
        },
        toggleIcon(){
            this.sendIcon = !this.sendIcon
        },
        deleteChat(index) {
            this.arrContact.splice(index, 1)
            this.dropChatMenu = false
        },
        deleteAllText(index){
            console.log('s')
            this.arrContact[index].chat = []
            this.dropChatMenu = !this.dropChatMenu
        },
        toggleChatMenu(){
            this.dropChatMenu = !this.dropChatMenu
        },
        append(emoji) {
            this.newText.text += emoji
          },
    },
    directives: {
        focus: {
          inserted(el) {
            el.focus()
          },
        },
      }
});


