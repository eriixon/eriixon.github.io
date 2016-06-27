angular.module('resume').service('ResumeService', function () {

    this.linkMap = {
        socialLinks: [
            {url: 'https://www.facebook.com/radkov.sn', title: "Facebook", img: 'facebook_icon.png'},
            {url: 'https://www.linkedin.com/in/radkovsn', title: "LikedIn", img: 'linkedin_icon.png'},
            {url: 'https://github.com/sergeyradkov', title: "GitHub", img: 'github_icon.png'},
            {url: 'https://www.instagram.com/sergeriic/', title: "Instagram", img: 'instagram_info.png'}
        ],
        tools: [
            {url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',title: 'HTML',img: 'html.png'},
            {url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',title: 'CSS',img: 'css.png'},
            {url: 'http://getbootstrap.com/',title: 'Bootstrap',img: 'bootstrap.png'},
            {url: 'http://jquery.com/',title: 'jQuery',img: 'jquery.png'},
            {url: 'https://angularjs.org/',title: 'AngularJS',img: 'angular.png'},
            {url: 'https://www.firebase.com/',title: 'Firebase',img: 'firebase.png',type: 'tool'},
            {url: 'https://developer.mozilla.org/en/docs/Web/JavaScript',title: 'JavaScript',img: 'javascript.png' ,type: 'tool'},
            {url: 'https://msdn.microsoft.com/en-us/library/kx37x362.aspx',title: 'C#',img: 'csharp.png',type: 'tool'},
            {url: 'https://github.com/',title: 'GitHub',img: 'github.png',type: 'tool'},
            {url: 'https://www.microsoft.com/net/default.aspx',title: 'Microsoft.NET',img: 'dotnet.png',type: 'tool'},
            {url: 'https://www.visualstudio.com/',title: 'Visual Studio',img: 'vs.png',type: 'tool'},
            {url: 'https://www.jetbrains.com/idea/',title: 'Intellij IDEA',img: 'idea.png',type: 'tool'}
            ],
        exps: [
            {url: "https://www.java.com/",title: "Java",img: 'java.png'},
            {url: "http://developer.android.com/index.html",title: "Android Studio",img: 'as.png'},
            {url: "https://nodejs.org/",title: "Node.JS",img: 'nodejs.png'}
        ],
       skills: [
            {item: "Problem solving", stars: 5},
            {item: "Communication & negotiation", stars: 5},
            {item: "Analitycal skills", stars: 5},
            {item: "Staff management", stars: 4},
            {item: "Project management", stars: 4},
            {item: "Time management", stars: 4}
            ],
     languages:[
            {item: "Russian", stars: 5},
            {item: "English", stars: 4}
            ],
      projects: [
           {url: 'http://sergeyradkov.github.io/pop-up-penguins/',title:'Find the penguins', img:'findup.png'},
           {url: 'http://sergeyradkov.github.io/music-finder/', title:'iTunes Music Finder', img:'imf.png'},
           {url: 'http://sergeyradkov.github.io/calculators/', title:'Digital Converter', img:'digcon.png'},
           {url: 'http://sergeyradkov.github.io/The-Slap-Game/', title:'The Slap Game', img:'slap.png'},
           {url: 'http://sergeyradkov.github.io/inspire/', title:'Inspire Page', img:'inspire.png'},
        //    {url: 'http://sergeyradkov.github.io/comics/', title:'Marvel Comics Store', img:'.png'},
           {url: 'https://qbhdemo.herokuapp.com/', title:'QB Form Helper', img:'qbhelper.png'}
                ]
    };
});
