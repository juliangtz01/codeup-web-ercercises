/**
 * 2.
 * Create a while loop that uses console.log() to create the output shown below
 *
 * 2
 * 4
 * 8
 * 16
 * 32
 * 64
 * 128
 * 256
 * 512
 * 1024
 * 2048
 * 4096
 * 8192
 * 16384
 * 32768
 * 65536
 */

var num = 1;

while(num < 65536)
{
    num *= 2;
    console.log(num);
}
