class testElements{

FirstName= () => {return '.form-group:nth-child(1)'}
LastName = () => {return '.col-md-4:nth-child(3)'}
Address = () => {return '.col-md-8 > .form-control'}
Email = () => {return '#eid'} 
Phone = () => {return ':nth-child(4) > .col-md-4 > .form-control'}
Gender = ()  => {return  ':nth-child(1) > .ng-pristine'}
Hobbies1 = () => {return '#checkbox1'}
Hobbies2 = () => {return '#checkbox2'}
Hobbies3 = () => {return '#checkbox3'}
ClickLanguage = () => {return '#msdd'}
SelectLanguage = () => {return ':nth-child(29) > .ui-corner-all'}
Skills = () =>   {return '#Skills'}
Country = () => {return '#countries'}
ClickCountry = () => {return '.select2-selection__arrow'}
SelectCountry = () => {return '#select2-country-results > :nth-child(11)'}
Year = () => {return '#yearbox'}
Month = () => {return ':nth-child(11) > :nth-child(3) > .form-control'}
Day = () => {return '#daybox'}
Password = () => {return '#firstpassword'}
Confirmpassword = () => {return '#secondpassword'}
Buttonsubmit = () => {return '#submitbtn'}
buttonrefresh = () => {return '#Button1'} 
exitmenu = () => {return '#basicBootstrapForm'}
}
export default testElements;