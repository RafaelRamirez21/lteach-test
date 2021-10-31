using System;
using static System.Console;
using Test1_CSharp.Tasks;

namespace Test1_CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            playTaskOne();
            playTaskTwo();
        }

        private static void playTaskTwo()
        {
            throw new NotImplementedException();
        }

        private static void playTaskOne()
        {
            var taskOne=new TaskOne(3,5,10);
            taskOne.ListNumber();
        }
    }
}
