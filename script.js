// constants

const email='ui@frengly.com';
const password='ui123';

const dest='English';

const translate_url='https://frengly.com/frengly/data/translate/';
const detection_url='https://frengly.com/frengly/data/detect?text=';

browser.contextMenus.create({
    id: "translate-item",
    title: "Auto Translate (English)",
    contexts: ["selection"]
});

   
let translate = (info, tab) => {
    let text = info.selectionText;


    // perform detection
    var config = {
        method: 'post',
        url: detection_url + text
    };
    axios(config).then(res=>{
        let lang = res.data['detectedLabel'];
        // console.log(lang)
        
        var data = JSON.stringify({"text":text,"src":lang,"dest":dest,"email":email,"password":password});
        var config = {method:'post', 'url': translate_url, data: data, headers: {'Content-Type': 'application/json'}}

        axios(config).then(res => {
            var results = res.data.list;
            
            var translated_text = "";

            for(var i=0; i < results.length; i++){
                translated_text += results[i]['destWord'];
            }

            console.log(translated_text)

            browser.tabs.sendMessage(tab.id, translated_text);

        }).catch(err=>console.log(err))

      }).catch(err=>console.log(err));
}

browser.contextMenus.onClicked.addListener( (info, tab) => {
    if (info.menuItemId == "translate-item") {
        translate(info, tab)
    }
});
