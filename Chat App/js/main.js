var data=
    {
        "message":{
            "profile1":["personal",["in","hi","06:40 AM"],["out","hello","06:41 AM"],["in","How are you bro?","06:42 AM"],["out","I am good bro.","06:40 AM"],["in","Let's meet soon bro.","06:40 AM"]],
            "profile2":["personal",["in","hello vishal how is your health condition?.","09:42 AM"],["out","Now it's good.","10:41 AM"]],
            "profile3":["personal",["out","Are you coming out bro?","10:41 AM"]],
            "profile4":["personal",["in","Hello, hemanth How are you?","06:40 AM"],["out"," I am fine. you?","06:41 AM"],["in","I am good too.","06:42 AM"]],
            "profile5":["personal",["in","Are you free?","06:40 AM"],["out","Yes yes","06:41 AM"],["in","lets go to mall.","06:42 AM"]],
            "profile6":["personal",["in","Are you in the class?","06:40 AM"],["out","No","06:41 AM"],["in","ok","06:42 AM"]],
            "profile7":["group",["group_in","Tomorrow is my birthday.","02:36 PM","profile6"],["group_out","Nice.","02:37 PM","myprofile"]],
            "profile8":["personal",["in","Seeing cricket match?.","09:42 AM"],["out","Yes","10:41 AM"]]
        }
    };
var users={
    "x":[],"profile1":["Nag Varun "],"profile2":["Vishal"],"profile3":["Pravanth"],"profile4":["Hemanth"],"profile5":["Roopraj"],"profile6":["Prabhas"],"profile7":["Mahesh Babu"],"profile8":["Shreya"]
};
  function display_message(user)
  {
      for(let i=1;i<9;i++){
        document.getElementById("profile"+i).style.background = "rgb(23, 23, 23)";
      }
      document.getElementById(user).style.background = "rgb(68, 68, 68)";
      nav_content=`<img class="nav_image" src="./pic/`+user+`.jpg"><font class="nav_name">`+users[user][0]+`</font>`;
      document.getElementById('nav_left').innerHTML = nav_content;
      var message_length=data["message"][user].length;
      var display=``;
      if(data["message"][user][0]=="personal")
      {
        for(let i=1;i<message_length;i++)
        
            display+=`<div class="`+data["message"][user][i][0]+`">`+data["message"][user][i][1]+`<br><div class="time">`+data["message"][user][i][2]+`</div></div>`;
      }
      else
      {
        for(let i=1;i<message_length;i++)
            if(data["message"][user][i][0]=="group_out")
            {
                display+=`<div class="`+data["message"][user][i][0]+`">`+data["message"][user][i][1]+`<img height="30px" width="35px" class="group_chat_pic" src="./pic/`+data["message"][user][i][3]+`.jpg">`+`<br><div class="time">`+data["message"][user][i][2]+`</div></div>`;
            }
            else
            {
                display+=`<div class="`+data["message"][user][i][0]+`"><img height="30px" width="35px" class="group_chat_pic" src="./pic/`+data["message"][user][i][3]+`.jpg">`+data["message"][user][i][1]+`<br><div class="time">`+data["message"][user][i][2]+`</div></div>`;
            }
      }  
      document.getElementById('message').innerHTML = display;
  }
  function var1() {
    let menu_content = `<div class="nav">
            <a class="group_name btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <font color="white">Walkover Inc.</font></a>
        </div>
        <div class="input-group mb-3">
            <input type="text" class="form-control search" placeholder="Search for members and c..." aria-label="Username" aria-describedby="basic-addon1" style="background-color: rgb(68, 68, 68);border-color: rgb(128,126,126);border-color: rgb(128, 126, 126);">
            <span class="input-group-text search-btn" id="basic-addon1" style="background-color: rgb(68, 68, 68); border-color: rgb(128,126,126);color: rgb(128,126,126);">+</span>
        </div>`; 
    for (let i = 1; i < 9; i++) {
        menu_content =menu_content + `<div class="profile" id="profile`+i+`" onclick="display_message('profile`+i+`');">
        <img class="image" src="./pic/profile`+1+`.jpg">
        `+users[`profile`+i][0]+`
        </div>`;
    }
    document.getElementById('menu').innerHTML = menu_content;
    display_message("profile1");
}
window.onload = var1;