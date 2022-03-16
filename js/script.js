const app = new Vue({
    el: '#root',
    data: {
        messageId: 0,
        dropdown: false,
        newtext: '',
        activeChat: 0,
        userSearch: '',
        newText: {
            text: '',
            data: '',
            status: ''
        },
        arrContact: [
            {
                name: 'Voldemort',
                lastAccess: '13:34',
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
                lastAccess: '13:34',
                img: 'img/cetto.jpg',
                chat: [
                    {
                        text: 'Secondo me non dobbiamo inquinare',
                        data: '12:34',
                        status: 'sent',
                        menu: false
                    },
                    {
                        text: 'Hai ragione Mirko. Però come criterio di massima, come sistema di riferimento, come atteggiamento preferenziale: tu fatti i cazzi toi.',
                        data: '12:34',
                        status: 'recived',
                        menu: false
                    },
                    
                ],
                visibility: true
            },
            {
                name: 'Dart Vather (Your Father)',
                lastAccess: '13:54',
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
                        text: 'Ask your mom!',
                        data: '12:36',
                        status: 'recived',
                        menu: false
                    },
                ],
                visibility: true
            },
            {
                name: 'Buffy the Slayer',
                lastAccess: '13:34',
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
                name: '420',
                lastAccess: '13:34',
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
        },
        addText: function (index){
            if(this.newText.text != '')
            {this.newText.text = this.newText.text.trim()
            const d = new Date();
            this.newText.data = d.getHours() + ':' + (d.getMinutes()<10?'0':'') + d.getMinutes()
            this.newText.status = 'sent'
            this.arrContact[index].chat.push({...this.newText})
            this.newText.text = ''
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
            this.arrContact[index].lastAccess = this.newText.data
            }, 3000)
            
        }},
        search() {
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
        }
    },

});


