'use client'

import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

interface SuggestedQuestionsProps {
    className?: string;
}

export function SuggestedQuestions({className}: SuggestedQuestionsProps) {
    return (
        <div className={cn('flex flex-wrap gap-2', className)}>
            <Button variant="outline" className="cursor-pointer">与最高的建筑相比，艾尔菲铁塔多高？</Button>
            <Button variant="outline" className="cursor-pointer">Github上最热门的存储库有哪些？</Button>
            <Button variant="outline" className="cursor-pointer">如何看待中国的外卖大战？</Button>
            <Button variant="outline" className="cursor-pointer">超加工食物与减抗有关吗？</Button>
        </div>
    )
}