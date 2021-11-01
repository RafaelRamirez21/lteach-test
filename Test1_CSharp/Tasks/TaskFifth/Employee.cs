using System;

namespace Test1_CSharp.Tasks.TaskFifth
{
    public class Employee : Person
    {
        public Employee()
        {
        }
        public int Salary { get; set; }
        public bool extrahour { get; set; }
        public Employee(int Id, string Name, string LastName, string Job,int salary, bool extrahour) : base(Id, Name, LastName, Job) 
        { 
            this.Salary=salary;
            this.extrahour=extrahour;
        }
        public void income()
        {
            Salary=this.Salary;
            Console.WriteLine($"hi {this.Name} this is your salary $ {this.Salary}");
        }



    }
}