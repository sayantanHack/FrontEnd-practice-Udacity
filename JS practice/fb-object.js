/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: 'Sayantan',
    friends: 400,
    messages: ["Hi there I`m using this","WOW","Udacity is awesome."],
    postMessage: function postMessage(message){   // decleraing methods for post message
       facebookProfile.messages.push(message);  
        return facebookProfile.messages;
    },
    deleteMessage: function deleteMessage(index){      // decleraing methods for delete message
        facebookProfile.messages.splice(index,1);
        return facebookProfile.messages;
    },
    addFriend: function addFriend(){                 // decleraing methods for add firends
        return facebookProfile.friends+=1; 
    },
    removeFriend: function removeFriend(){          // decleraing methods for delete friends
        return facebookProfile.friends -=1; 
    } 
    
};
console.log("My profile is "+facebookProfile.name+facebookProfile.postMessage("hey whts up?")+"is my last post.I have "+facebookProfile.friends+"friends.");
