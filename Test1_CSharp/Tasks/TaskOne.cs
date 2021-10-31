using System.Collections.Generic;
using System;
namespace Test1_CSharp.Tasks
{
    public class TaskOne
    {   
        //atributte
        public int InputX { get; set; }//muliply by x
        public int InputY { get; set; }// multiply by y
        public int InputRange { get; set; }//range 0 to n
        //Constructor
        public TaskOne(int InputX, int InputY, int InputRange)
        {
            this.InputX = InputX;
            this.InputY = InputY;
            this.InputRange = InputRange;           
        }

        //Methods
        public void ListNumber()

        {
            (int x,int y)=(this.InputX,this.InputY);
             Console.WriteLine();
             int j=0;
             int [] store=new int[this.InputRange];
            for (int i=1;  i < this.InputRange ;  i++)
            {
              
                if (i%x==0 || i%y==0)
                {
                    Console.WriteLine($"{i} is multiply by {x} or {y}");
                    store[j]=i;
                    j++;

                } 
                else{
                    Console.WriteLine(i.ToString());
                }
            }
            sum(store);
        }

        private void sum(int[] store)
        {
            int counter=0;
            foreach (var item in store)
            {
                counter+=item;
            }
            Console.WriteLine($"The result of the sum operation is {counter}");
        }


    }

}