using System;

namespace Test1_CSharp.Tasks.TaskFifth
{
    public class Person
    {
        //Properties
        protected int Id { get; set; }
        protected string Name { get; set; }
        protected string LastName { get; set; }
        protected string Job { get; set; }
        //Default constructor
        public Person(){ }
        public Person(int Id,string Name,string LastName,string Job)
        {
            this.Id=Id;
            this.Name=Name;
            this.LastName=LastName;
            this.Job=Job;

        }
        public void action()
        {
            Console.WriteLine($"Name : {this.Name} \n LastName:{this.LastName} \n Job:{Job}");
        }
    }
}