# Usage

## Vocabulary

The following vocabulary is used in the source code to name variables:

* Target: The object to which aspect are added.
* Method: The specific methods on the object to which aspects are added. These are then joinpoints. 
* Joinpoint: Points in a running program where additional behavior can be usefully joined. 
* Pointcut: A set of joinpoints. Can be specified as String, [String], RegExp, Function(target):[String]
* Advice/Aspects: Code to run at a join point. Can be specified as Object, Function(targetObject, targetMethodName).
* Advice Type: Different advice types are executed at different times with respect to the wrapped function. See below for a list of all advice types.

You can add aspects to a pointcut via the following syntax:

```
var aop = require('aop')
aop.before(target, pointcut, aspect)
aop.around(target, pointcut, aspect)
aop.on(target, pointcut, aspect)
aop.afterReturning(target, pointcut, aspect)
aop.afterThrowing(target, pointcut, aspect)
aop.after(target, pointcut, aspect)

// Alternatively, a shortcut method to add multiple aspect types
aop.add(target, method, {
  before: aspect
, around: aspect
, on: aspect
, after: aspect
, afterReturning: aspect
, afterThrowing: aspect
})
```

The advised function is highly recommended reading. It is the main body that is called at runtime after all advice has been successfully added to objects.

In particular, it specifies the behavior of various aspect types (run in the following order):

* before(args): args are original arguments passed to the joinpoint, return value discarded, errors uncaught.
* around(joinpoint): return value used, errors are caught for afterThrowing function, call joinpoint.proceed() to run joinpoint.
* on(args): args are original arguments passed to the joinpoint, return value discarded, errors uncaught.
* afterReturning(args): args are [result] of wrapped/original function, called only on success, return value discarded, errors uncaught.
* afterThrowing(err): called only on error, return value discarded, errors uncaught.
* after(args): args are [result] of wrapped/original function, return value discarded, errors uncaught. 

----

Please Note: this project has moved from briancavalier/aop to cujojs/aop.
Any existing forks have been automatically moved to cujojs/aop. However,
you'll need to update your clone and submodule remotes manually.

Update the url in your .git/config, and also .gitmodules for submodules:

```
git://github.com/cujojs/aop.git
https://cujojs@github.com/cujojs/aop.git
```

Helpful link for updating submodules:
[Git Submodules: Adding, Using, Removing, Updating](http://chrisjean.com/2009/04/20/git-submodules-adding-using-removing-and-updating/)

----

[Aspect Oriented Programming](http://en.wikipedia.org/wiki/Aspect-oriented_programming "Aspect-oriented programming - Wikipedia, the free encyclopedia") for Javascript.

## Changelog

### v0.5.3

* First official release as part of [cujojs](http://github.com/cujojs)
* Minor doc and package.json tweaks

### v0.5.2

* Revert to larger, more builder-friendly module boilerplate.  No functional change.

### v0.5.1

* Minor corrections and updates to `package.json`

### v0.5.0

* Rewritten Advisor that allows entire aspects to be unwoven (removed) easily.

# Beers to:

* [AspectJ](http://www.eclipse.org/aspectj/) and [Spring Framework AOP](http://static.springsource.org/spring/docs/3.0.x/reference/aop.html) for inspiration and great docs
* Implementation ideas from @phiggins42's [uber.js AOP](https://github.com/phiggins42/uber.js/blob/master/lib/aop.js)
* API ideas from [jquery-aop](http://code.google.com/p/jquery-aop/)