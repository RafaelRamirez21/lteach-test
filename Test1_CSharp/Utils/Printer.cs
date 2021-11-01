using static System.Console;
namespace CTest1_CSharp.Utils
{
    public static class Printer
    {
        public static void DrawLine(int size = 10)
        {
            WriteLine("".PadLeft(size, '='));
        }
        public static void WriteTitle(string title)
        {
            var size = title.Length + 4;
            DrawLine(size);
            WriteLine($"| {title} |");
            DrawLine(size);
        }
        public static void Beeping(int hz=2000, int time=500, int qty=1)
        {
            while (qty-- > 0)
            {
                Beep(hz, time);
            }
        }
    }
}
