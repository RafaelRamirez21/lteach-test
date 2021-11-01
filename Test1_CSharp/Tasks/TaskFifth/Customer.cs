namespace Test1_CSharp.Tasks.TaskFifth
{
    public class Customer : Person
    {
        public int CreditCardId { get; set; }
        public bool subscripction { get; set; }
        public Customer(int Id, string Name, string LastName, string Job,int CreditCardId,bool subscripction) : base(Id, Name, LastName, Job) {
            this.CreditCardId=CreditCardId;
            this.subscripction=subscripction;
         }
         public Customer()
         {
             
         }
        


    }
}