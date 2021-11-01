using System;
using CTest1_CSharp.Utils;

namespace Test1_CSharp.Tasks
{
    public class TaskThree
    {
        public int size { get; set; }
        //constructor
        public TaskThree(int size = 3)
        {
            this.size = size;
        }
        //methods
        public void makeMatrix()
        {
            int len = this.size;
            int[,] matrix = new int[len, len];
            int counter = 1;
            if (len % 2 != 0)
            {
                var aux = len / 2;
                for (int i = 0; i < len / 2 + 1; i++)
                {
                    for (int j = aux + i; j > aux - (2 + i); j--)
                    {
                        if (counter == len * len + 1) { break; }
                        matrix[aux - i, j] = counter;
                        counter++;
                    }
                    if (counter == len * len + 1) { break; }
                    for (int j = aux - (1 + i); j < aux + i; j++)
                    {
                        matrix[j + 2, aux - (1 + i)] = counter;
                        counter++;
                    }
                    for (int j = aux - (1 + i); j < aux + (1 + i); j++)
                    {
                        matrix[aux + (1 + i), j + 1] = counter;
                        counter++;
                    }
                    for (int j = aux + i; j > aux - (1 + i); j--)
                    {
                        matrix[j, aux + (1 + i)] = counter;
                        counter++;
                    }
                }
            }
            else
            {
                int aux = len / 2 - 1;
                for (int i = 0; i < len / 2 + 1; i++)
                {
                    for (int j = aux - i; j < aux + (2 + i); j++)
                    {
                        matrix[aux + (1 + i), j] = counter;
                        counter++;
                    }
                    for (int j = aux + i; j > aux - (1 + i); j--)
                    {
                        matrix[j, aux + (1 + i)] = counter;
                        counter++;
                    }
                    for (int j = aux + i; j > aux - (2 + i); j--)
                    {
                        if (counter == len * len + 1) { break; }
                        matrix[aux - i, j] = counter;
                        counter++;
                    }
                    if (counter == len * len + 1) { break; }
                    for (int j = aux - (1 + i); j < aux + i; j++)
                    {
                        matrix[j + 2, aux - (1 + i)] = counter;
                        counter++;
                    }
                }
            }

            showResult(matrix);

        }



        private void showResult(int[,] matrix)
        {

            int counter = 0;
            int aux = 0;
            int auxD = this.size - 1;
            Printer.WriteTitle($"Matrix {this.size} x {this.size}  in the form of a spiral ");
            for (int i = 0; i < this.size; i++)
            {

                for (int j = this.size - 1; j >= 0; j--)
                {   
                    Console.Write($"  {matrix[i, j]} |");
                    //Logic to approach in the summation operation 
                    if (i == j)
                    {
                        counter += matrix[i, j];

                    }
                    if (i == aux && j == auxD)

                    {
                        aux++;
                        auxD--;
                        if (aux == auxD)
                        {
                            aux++;
                            auxD--;
                        }
                        counter += matrix[i, j];

                    }
                }
                Console.WriteLine("\n");
            }
            Printer.WriteTitle($"the sum of their diagonals is : {counter}");

        }
    }
}