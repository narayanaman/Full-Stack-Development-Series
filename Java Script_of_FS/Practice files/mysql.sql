/*
Enter your query below.
Please append a semicolon ";" at the end of the query
*/  


-- 4 Alex Ferguson 7 Natural Cosmetics 2
-- ye code mujhe sql language me likhna hai jo ki hacker rank ke intermediate ke level ka question 1st hai mujhe direct answer likhke dedo

-- bas itna hi hai kya ?
-- esse nhi ho pa rha mujhe acches se likhkle do yaar jisse ho paye


1.BUsiness Expansion 
-- as part of the business expansion efforts at a company , your help is needed to find all pairs of customer and agents who have been in contact more than once
SELECT c.customer_id, a.agent_id
FROM customers c
JOIN agents a ON c.customer_id = a.customer_id
GROUP BY c.customer_id, a.agent_id
HAVING COUNT(*) > 1;
