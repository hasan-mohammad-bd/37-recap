function patriChai(age, earning){
    console.log(age);
    console.log(earning);

    const trueAge = age + 7;

    function canMarry(expense){
        const remaining = earning - expense;
        if(remaining > 1000){
            return true;
        }
        return false;
    }
}

//execution context(hoisting/lifting): the js set the functionally(how it would be executed) in function in advanced. 
// var declared variable only hoist it variable name not the parameter. for const/let also hoist
//here earning comes from upper function, it is called scope chain. 
//chain can be created even with globally declared variable.

//git: private repo to public repo*********
/* 
go to private repo > copy the link > go to cmd > git clone --bare (copy the link here) > open a new repo to your personal account > go to cmd and > go to the clone file typing cd> then type:git push --mirror (copied the new repo link).
to change git remote Origen: in cmd, type:git remote set-url origin (copied new repo link)
type: git remote -v (to see the origin of the file)

to change any private repo to public repo, go to setting and change visibility of the repo.
*/

