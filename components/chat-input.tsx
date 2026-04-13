'use client'

import {cn} from '@/lib/utils'
import {ScrollArea} from "@/components/ui/scroll-area";
import {Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle} from "@/components/ui/item";
import {Avatar, AvatarGroupCount} from "@/components/ui/avatar";
import {ArrowUp, FileText, Paperclip, XCircle} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Scrollbar} from "@radix-ui/react-scroll-area";

interface ChatInputProps {
    className?: string
}

export function ChatInput({className}: ChatInputProps) {
    const files = [
        {"id": 1, "extension": "pdf", "filename": "go+java.pdf", "size": "2.52MB"},
        {"id": 2, "extension": "pdf", "filename": "全家福.pdf", "size": "2.52MB"},
        {"id": 3, "extension": "pdf", "filename": "2025年年终汇报.pdf", "size": "2.52MB"},
        {"id": 4, "extension": "pdf", "filename": "数据可视化看板.pdf", "size": "2.52MB"},
        {"id": 5, "extension": "pdf", "filename": "ReActAgent.pdf", "size": "2.52MB"}

    ]
    return (
        <div className={cn("flex flex-col bg-white w-full rounded-2xl py-3 border", className)}>
            {/* 顶部的文件列表 */}
            <div className="w-full px-4 mb-1">
                <ScrollArea className="w-full whitespace-nowrap">
                    <div className="flex w-max space-x-4 pb-4">
                        {files.map(file => (
                            <Item
                                key={file.id}
                                variant="muted"
                                className="p-2 flex-shrink-0 gap-2"
                            >
                                <ItemMedia>
                                    <Avatar className="size-8">
                                        <AvatarGroupCount>
                                            <FileText/>
                                        </AvatarGroupCount>
                                    </Avatar>
                                </ItemMedia>
                                {/* 文件信息 */}
                                <ItemContent className="gap-0">
                                    <ItemTitle className="text-sm text-gray-700">{file.filename}</ItemTitle>
                                    <ItemDescription
                                        className="text-xs">{file.extension} · {file.size}</ItemDescription>
                                </ItemContent>
                                <ItemActions>
                                    <Button variant="ghost" size="icon-xs" className="cursor-pointer">
                                        <XCircle/>
                                    </Button>
                                </ItemActions>
                            </Item>
                        ))}
                    </div>
                    <Scrollbar orientation="horizontal"/>
                </ScrollArea>
            </div>
            {/* 中间输入口 */}
            <div className="px-4 mb-3">
                <textarea
                    rows={2}
                    placeholder="给Manus一个任务"
                    className="scrollbar-hide outline-none w-full text-sm resize-none h-[46px] min-h-[40px]"
                />
            </div>
            {/* 底部上传&发送按钮 */}
            <footer className="flex flex-row justify-between w-full px-3">
                {/* 上传按钮 */}
                <div className="flex gap-2">
                    <Button variant="outline" className="rounded-full w-8 h-8 cursor-pointer">
                        <Paperclip/>
                    </Button>
                </div>
                {/* 发送按钮 */}
                <div className="flex gap-2">
                    <Button variant="outline" className="rounded-full w-8 h-8 cursor-pointer">
                        <ArrowUp/>
                    </Button>
                </div>
            </footer>
        </div>
    )
}
