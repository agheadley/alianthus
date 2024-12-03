export const obj1 = $state({
    x:1,
    y:2,
    z:'Um!'
});

export const alert = $state({msg:"",type:'',ms:3000});

export const user = $state({name:'AA',isAdmin:true,isTeacher:true,isPupil:false});

export const groups=$state([{
    id:0,sc:'',sl:'',ss:'',g:'',nc:0,lv:'',yr:0,log:'',
    pupil:[{pid:0,nc:0,pn:'',sn:'',gnd:'',hse:''}],
    teacher:[{tid:'',sal:''}]
}]);

export let isCoreReady=$state(false);

export const setIsCoreReady = (bool:boolean) =>{
    isCoreReady = bool;
};


