<?xml version="1.0" encoding="UTF-8" ?>
<Package name="VTOpenDay2" format_version="4">
    <Manifest src="manifest.xml" />
    <BehaviorDescriptions>
        <BehaviorDescription name="behavior" src="behavior_1" xar="behavior.xar" />
    </BehaviorDescriptions>
    <Dialogs>
        <Dialog name="Chat" src="Chat/Chat.dlg" />
    </Dialogs>
    <Resources>
        <File name="LICENSE" src="LICENSE" />
        <File name="README" src="README.md" />
    </Resources>
    <Topics>
        <Topic name="Chat_iti" src="Chat/Chat_iti.top" topicName="Chat" language="it_IT" />
    </Topics>
    <IgnoredPaths />
    <Translations auto-fill="en_US">
        <Translation name="translation_en_US" src="translations/translation_en_US.ts" language="en_US" />
        <Translation name="translation_it_IT" src="translations/translation_it_IT.ts" language="it_IT" />
    </Translations>
</Package>
