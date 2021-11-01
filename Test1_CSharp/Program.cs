using System;
using static System.Console;
using Test1_CSharp.Tasks;
using Test1_CSharp.Tasks.TaskFifth;
using CTest1_CSharp.Utils;

namespace Test1_CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Printer.WriteTitle("C#.Net Junior Dev Challenge");
            Printer.WriteTitle("Select option: ");
            Console.WriteLine("1. Find multiple 3 or 5");
            Console.WriteLine("2. Power Number");
            Console.WriteLine("3. Make Matriz and sum diagonals");
            Console.WriteLine("5. Make classes and creating instance from class Person");
            string testString = Console.ReadLine();
            switch (testString)
            {
                case "1":
                    playTaskOne();
                    break;
                case "2":
                    playTaskTwo();
                    break;
                case "3":
                    playTaskThree();
                    break;
                case "4":
                    playTaskOne();
                    break;
                case "5":
                    PlayTaskFifth();
                    break;

                default:
                    Console.WriteLine($"Not found.");
                    break;
            }



        }

        private static void PlayTaskFifth()
        {
            Printer.WriteTitle("Instance Employees");
            var employeeOne = new Employee(007, "Luis", "Suárez", "saleman", 68790990, false);
            employeeOne.action();
            employeeOne.income();
            var employeeTwo = new Employee(023, "Richard", "Salamandra", "Developer", 68790990, false);
            employeeTwo.action();
            employeeTwo.income();
            var employeeThree = new Employee(037, "Felipe", "Roca", "CEO", 68790990, false);
            employeeThree.action();
            employeeThree.income();
            Printer.WriteTitle("Instance Costumer");
            var customerOne = new Customer(010, "Felipe", "Roca", "salaty man", 455568790, false);
            customerOne.action();
            var customerTwo = new Customer(012, "Felipe", "Roca", "Deliver", 455568790, false);
            customerTwo.action();
            var customerThree = new Customer(013, "Felipe", "Roca", "own bussiness", 455568790, false);
            customerThree.action();



        }

        private static void playTaskThree()
        {
            Printer.WriteTitle("Insert value for matrix size n: ");
            string size=Console.ReadLine();
            var taskThree = new TaskThree(int.Parse(size));
            taskThree.makeMatrix();


        }

        private static void playTaskTwo()
        {
            var taskTwo = new TaskTwo(5);
            taskTwo.findNumber();
        }

        private static void playTaskOne()
        {
            Printer.WriteTitle("Insert value:");
            Console.WriteLine("Input X (3):");
            string x = Console.ReadLine();
            Console.WriteLine("Input Y (5):");
            string y = Console.ReadLine();
            Console.WriteLine("Range (15):");
            string range = Console.ReadLine();

            var taskOne = new TaskOne(int.Parse(x), int.Parse(y), int.Parse(range));
            taskOne.ListNumber();
           
        }
    }
}
