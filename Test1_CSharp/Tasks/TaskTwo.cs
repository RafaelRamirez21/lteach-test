using System;

namespace Test1_CSharp.Tasks
{
    public class TaskTwo
    {
        public int Power { get; set; }
        public TaskTwo(int Power = 5)
        {
            this.Power = Power;
        }
        public void findNumber()
        {
            for (int i = 1000; i < 9999; i++)
            {

                int digit1 = (int)Char.GetNumericValue(i.ToString()[0]);
                int digit2 = (int)Char.GetNumericValue(i.ToString()[1]);
                int digit3 = (int)Char.GetNumericValue(i.ToString()[2]);
                int digit4 = (int)Char.GetNumericValue(i.ToString()[3]);
                int[] digits = new int[4] { digit1, digit2, digit3, digit4 };
                double counter = 0;
                foreach (var item in digits)
                {
                    counter +=Math.Pow(item,this.Power);
                    
                }
                if (counter==i)
                {
                     Console.WriteLine($"{i} : {counter}");
                }

            }
            
        }
    }
}
