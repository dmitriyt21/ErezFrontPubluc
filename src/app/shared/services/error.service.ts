export class ErrorService{
    getErrorMessage(errorStatus : number) : string{
        switch(errorStatus){
            //problem connecting to DB
            case 404 : return 'אירעה שגיאה, נסה שוב מאוחר יותר';
            //Wrong User Data
            case 400 : return 'כתובת האימייל או הסיסמה אינם נכונים';
        }
    }
}