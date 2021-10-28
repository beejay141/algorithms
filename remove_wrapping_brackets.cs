using cox_balance_core.Extensions;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;

namespace test
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(Bracket("(0"));
        }

        public static string Bracket(string word)
        {
            var result = word;
            var done = false;
            Stack<char> hash = new Stack<char>();

            while (!done && result.Length >0)
            {
                var leftIdx = 0;
                var rightIdx = result.Length - 1;
                if("(".Contains(result[leftIdx])  && ")".Contains(result[rightIdx]))
                {
                    result = result.Substring(1, result.Length - 2);
                }
                else
                {
                    
                    foreach (char s in result)
                    {
                        if ("()".Contains(s))
                        {
                            if (s == '(')
                            {
                                hash.Push(s);
                            }
                            else if (hash.Count == 0) return word;
                            else
                            {
                                hash.Pop();
                            }
                        }
                    }
                    done = true;
                }
            }

            return hash.Count > 0 ? word : result;
        }
    }

}
