#React Content Card Component

Createthe cards array as

    cards: [{
        backgroundImg: 'images/insurance.jpeg',
        editorOptions: {
            position: 'bottom',
            copy: true,
            edit: true,
            print: true,
            delete: true
        },
        headerOptions: {
            header: true,
            position: 'top',
        },
        headerData: {
            icon: 'images/car.png',
            title: 'Car insurance',
            description: 'We know lots of factors go into calculating insurance costs...'
        }
    }];

Cards argument details below
    1. Card background image
        
        backgroundImg: 'images/insurance.jpeg'
        
        background image for card


    2. Editor Options

        copy, edit, print and delete options can be display as per the user access

        editorOptions: {
            position: 'bottom',
            copy: true, // 'false' will not display copy option
            edit: true, // 'false' will not display edit option
            print: true, // 'false' will not display print option
            delete: true // 'false' will not display delete option
        }

        Change the position of editor options by changing position 

        editorOptions: {
            position: 'bottom' // 'top'  will move the option to top of card
        }

    3. Header Options 
        
        You can hide header by setting header to false (header: false)
        You can change the position of header 
            
        headerOptions: {
            header: true, // 'false' to hide header by setting header
            position: 'top', // 'bottom' for header at the bottom of card
        },

    4. Header Data 

        headerData: { 
            icon: 'images/car.png', // path to header icon image
            title: 'Car insurance', // Header text
            description: 'We know lots of factors go into calculating insurance costs...' // Header description
        }
            

    


Render the dom as 
    <ContentCards />
    