## Stumbling through learnyounode

Testing
Testing

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

> To add all the changes you've made:
> 
> git add .
> 
> To commit them:
> 
> git commit -m "MY MESSAGE HERE" #-m is the message flag
> 
> You can put those steps together like this:
> 
> git commit -a -m "MY MESSAGE HERE"
> 
> To push your committed changes from your local repository to your remote repository:
> 
> git push origin master


### Make it modular
A module encapsulates related code into a single unit of code. When creating a module, this can be interpreted as moving all related functions into a file.

### HTTP Client
The response object / Stream that you get from http.get() also has a setEncoding() method. If you call this method with "utf8", the "data" events will emit Strings rather than the standard Node Buffer objects which you have to explicitly convert to Strings. 

### HTTP Collect
Use a third-party package to abstract the difficulties involved in collecting an entire stream of data.    
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions