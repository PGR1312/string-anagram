var str1='triangel';
var str2='integral';

if(str1.length == str2.length)
    {
        var s1=str1.split('').sort().join('');
        console.log(s1);
        
        var s2=str2.split('').sort().join('');
        console.log(s2);
        if(s1==s2)
        {
            console.log('Anagram');
        }
        else
        {
            console.log('Not anagram');
        }
        
    }