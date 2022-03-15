const app = new Vue({
    el: '#root',
    data: {
        activeChat: 0,
        arrContact: [
            {
                name: 'Voldemort',
                lastAccess: '13:34',
                img: 'img/avatar_1.jpg',
                chat: [
                    {
                        text: 'Looking for you',
                        data: '12:34',
                        status: 'recived'
                    },
                    {
                        text: 'I am not Harry!',
                        data: '12:34',
                        status: 'sent'
                    },
                    {
                        text: 'Ops! Wrong chat!',
                        data: '12:34',
                        status: 'recived'
                    },
                ]
            }, 
            {
                name: 'Cetto la qualunque',
                lastAccess: '13:34',
                img: 'img/avatar_1.jpg',
                chat: [
                    {
                        text: 'Secondo me non dobbiamo inquinare',
                        data: '12:34',
                        status: 'sent'
                    },
                    {
                        text: 'Hai ragione Mirko. Però come criterio di massima, come sistema di riferimento, come atteggiamento preferenziale: tu fatti i cazzi toi.',
                        data: '12:34',
                        status: 'recived'
                    },
                    
                ]
            },
            {
                name: 'Dart Vather (Your Father)',
                lastAccess: '13:54',
                img: 'img/avatar_2.jpg',
                chat: [
                    {
                        text: 'Hey! I am your father',
                        data: '12:34',
                        status: 'recived'
                    },
                    {
                        text: 'No way!',
                        data: '12:35',
                        status: 'sent'
                    },
                    {
                        text: 'Ask your mom!',
                        data: '12:36',
                        status: 'recived'
                    },
                ]
            },
            {
                name: 'Buffy the Slayer',
                lastAccess: '13:34',
                img: 'img/avatar_3.jpg',
                chat: [
                    {
                        text: 'I love you!',
                        data: '12:34',
                        status: 'sent'
                    },
                    {
                        text: 'Are you a vampire?',
                        data: '12:35',
                        status: 'recived'
                    },
                    {
                        text: 'No!',
                        data: '12:36',
                        status: 'sent'
                    },
                    {
                        text: 'Then you are not my type!',
                        data: '12:36',
                        status: 'recived'
                    },
                ]
            },
            {
                name: '420',
                lastAccess: '13:34',
                img: 'img/avatar_6.jpg',
                chat: [
                    {
                        text: 'Are u available?',
                        data: '12:34',
                        status: 'sent'
                    },
                    {
                        text: 'See you in 15 min',
                        data: '12:34',
                        status: 'recived'
                    },
                    {
                        text: 'Awesome!',
                        data: '12:34',
                        status: 'sent'
                    }
                ]
            },
        ]
    },
    methods: {
        selectChat: function (index) {
            this.activeChat = index
        }
    }
});