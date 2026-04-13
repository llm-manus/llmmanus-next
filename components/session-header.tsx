'use client'

import {SidebarTrigger, useSidebar} from "@/components/ui/sidebar";
import {Button} from "@/components/ui/button";
import {Download, FileSearchCorner, FileText} from "lucide-react";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle} from "@/components/ui/item";
import {Avatar, AvatarGroupCount} from "@/components/ui/avatar";

export function SessionHeader() {
    const {open, isMobile} = useSidebar()
    const files = [
        {"id": 1, "extension": "pdf", "filename": "go+java.pdf", "size": "2.52MB"},
        {"id": 2, "extension": "pdf", "filename": "全家福.pdf", "size": "2.52MB"},
        {"id": 3, "extension": "pdf", "filename": "2025年年终汇报.pdf", "size": "2.52MB"},
        {"id": 4, "extension": "pdf", "filename": "数据可视化看板.pdf", "size": "2.52MB"},
        {"id": 5, "extension": "pdf", "filename": "ReActAgent.pdf", "size": "2.52MB"},
        {"id": 6, "extension": "pdf", "filename": "ReActAgent.pdf", "size": "2.52MB"},
        {"id": 7, "extension": "pdf", "filename": "ReActAgent.pdf", "size": "2.52MB"},
        {"id": 8, "extension": "pdf", "filename": "ReActAgent.pdf", "size": "2.52MB"}
    ]
    return (
        <header
            className="bg-[#f8f8f7] sm:min-w-[390px] flex flex-row items-center justify-between pt-3 pb-2 gap-1 sticky top-0 z-10 flex-shrink-0">
            {/* 左侧操作内容 */}
            <div className="flex items-center flex-1">
                <div className="relative flex items-center">
                    {(!open || isMobile) && <SidebarTrigger/>}
                </div>
            </div>
            {/* 中间会话标题区 */}
            <div
                className="max-w-full sm:max-w-[768px] sm:min-w-[390px] flex w-full items-center justify-between gap-1 overflow-hidden">
                {/* 左侧标题 */}
                <div className="text-gray-700 text-lg whitespace-nowrap text-ellipsis overflow-hidden">
                    编写python冒泡排序算法
                </div>
                {/* 右侧按钮 */}
                <Dialog>
                    {/* 模态窗触发器 */}
                    <DialogTrigger asChild>
                        <Button variant="ghost" size="icon-sm" className="cursor-pointer">
                            <FileSearchCorner/>
                        </Button>
                    </DialogTrigger>
                    {/* 模态窗内容 */}
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>此任务中的所有文件</DialogTitle>
                        </DialogHeader>
                        <ScrollArea className="h-[500px]">
                            <div className="flex flex-col gap-1">
                                {files.map(file => (
                                    <Item
                                        key={file.id}
                                        variant="default"
                                        className="p-2 flex-shrink-0 gap-2 cursor-pointer hover:bg-gray-100"
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
                                                <Download/>
                                            </Button>
                                        </ItemActions>
                                    </Item>
                                ))}
                            </div>
                        </ScrollArea>
                    </DialogContent>
                </Dialog>
            </div>
            {/* 右侧占位 */}
            <div className="flex-1"></div>
        </header>
    )
}