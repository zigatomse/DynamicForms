from dynamicforms import serializers
from examples.enum_field import EnumField
from examples.models import CalendarReminder


class RemindersSerializer(serializers.ModelSerializer):
    type = EnumField(CalendarReminder.RType)
    unit = EnumField(CalendarReminder.Unit)

    def __init__(self, *args, **kwds):
        super().__init__(*args, **kwds)
        # this is a nested serializer - we don't need link to parent object
        self.fields['event'].display = serializers.DisplayMode.SUPPRESS
        self.fields['event'].required = False
        self.fields['event'].write_only = True

    class Meta:
        model = CalendarReminder
        exclude = ()
