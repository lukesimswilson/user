# user
Client side script to get a handle on the currently logged in tumblr user.

## About
If truth be known this is an ugly iframe hack to retrieve the currently logged in tumblr user from the submissions page of your blog.

But hey it works (kinda! - see limitations below) and you get to see who is visiting your blog :)

## Limitations
Current version only works on blogs hosted on `tumblr.com` with submissions enabled.

## Dependancies
[Ben Alman's jquery postmessage plugin](https://github.com/cowboy/jquery-postmessage)

## Setup
Simples, just include the following in your tumblr theme
  - [jquery.ba-postmessage.min.js](http://github.com/cowboy/jquery-postmessage/raw/master/jquery.ba-postmessage.min.js)
  - [$tumblrjs.user.min.js](http://github.com/tumblrjs/user/raw/master/$tumblrjs.user.min.js)

## Usage
```html
<!-- include the libraries -->
<script src="//github.com/cowboy/jquery-postmessage/raw/master/jquery.ba-postmessage.min.js"></script>
<script src="//github.com/tumblrjs/user/raw/master/$tumblrjs.user.min.js"></script>

<!-- add your code -->
<script>
    $tumblrjs.user.ready(function(logged_in_user) {
            if (logged_in_user) {
                if (console) {
                    console.log('Yo ' + logged_in_user);
                } else {
                    alert('Yo ' + logged_in_user + ' you really need to switch browsers!');
                }

            }
    });
</script>
```

## Contributors

Here's hoping!


## License

(The MIT License)

Copyright (C) 2013 Andrew McGreevy

 }}8{{ (http://8le.gd)

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.