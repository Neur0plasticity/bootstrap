import { modules } from '../modules/main';
// export interface bootstrap {
//     (modules: string[]): 
// };
export const bootstrap = function(obj){
    loadModules(obj);
    dependencyInjectionManagement(obj);
    invokeModules(obj);
    return onFinish(obj);
};
const loadModules = function(obj){
    modules(obj.modules);
};
const dependencyInjectionManagement = function(obj){
    
};
const invokeModules = function() {

};
const onFinish      = function() {

};